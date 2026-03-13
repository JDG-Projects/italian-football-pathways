"use server";

interface TelegramPayload {
  chat_id: number;
  text: string;
  parse_mode?: "Markdown" | "MarkdownV2" | "HTML";
  disable_notification: boolean;
  message_thread_id?: number;
}

type Thread = "GADS" | "default";

interface Props {
  text: string;
  thread?: Thread;
}

function pickThreadId(thread: Thread): number | undefined {
  const envKey = thread === "GADS" ? "THREAD_ID_GADS" : "THREAD_ID_DEFAULT";
  const raw = process.env[envKey];
  if (!raw) return undefined;

  const n = parseInt(raw, 10);
  return Number.isFinite(n) ? n : undefined;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<{ ok: boolean; error?: string }> {
  const { name, email, phone, message } = formData;

  const lines = [
    `📩 *Нова заявка з сайту*`,
    ``,
    `*Ім'я:* ${name}`,
    `*Email:* ${email}`,
    phone ? `*Телефон:* ${phone}` : null,
    ``,
    `*Повідомлення:*`,
    message,
  ]
    .filter((l) => l !== null)
    .join("\n");

  try {
    await sendTelegramMessage({ text: lines });
    return { ok: true };
  } catch (err) {
    console.error("submitContactForm failed:", err);
    return { ok: false, error: "Failed to send message" };
  }
}

async function sendTelegramMessage({ text, thread = "default" }: Props) {
  const botToken = process.env.BOT_TOKEN;

  const chatIds = (process.env.CHAT_IDS || "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  if (!botToken || chatIds.length === 0) {
    console.warn("Telegram bot token or CHAT_IDS not configured");
    return;
  }

  const threadId = pickThreadId(thread);

  await Promise.all(
    chatIds.map((chatId) => {
      const cid = chatId.toString();

      const payload: TelegramPayload = {
        chat_id: Number(cid),
        text,
        disable_notification: true,
      };

      if (cid.startsWith("-100") && threadId !== undefined) {
        payload.message_thread_id = threadId;
      }

      return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then(async (res) => {
        if (!res.ok) {
          const body = await res.text().catch(() => "");
          throw new Error(`Telegram API error ${res.status}: ${body}`);
        }
        return res;
      });
    }),
  );
}
