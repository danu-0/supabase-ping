import fetch from "node-fetch";


const SUPABASE_URL = "https://abcdxyz.supabase.co"; // Ganti dengan project URL kamu
const SUPABASE_KEY = "public-anon-key"; // Ganti dengan anon key kamu (opsional)

// Endpoint sederhana untuk diping (bisa pakai /rest/v1 atau /auth/v1)
const ENDPOINT = `${SUPABASE_URL}/rest/v1/`;

async function pingSupabase() {
  try {
    const res = await fetch(ENDPOINT, {
      headers: {
        apikey: SUPABASE_KEY,
      },
    });

    if (res.ok) {
      console.log(`[${new Date().toISOString()}] ✅ Supabase aktif`);
    } else {
      console.log(`[${new Date().toISOString()}] ⚠️ Gagal ping: ${res.status} ${res.statusText}`);
    }
  } catch (err) {
    console.error(`[${new Date().toISOString()}] ❌ Error:`, err.message);
  }
}

// Jalankan setiap 6 jam (21600000 ms)
pingSupabase();
setInterval(pingSupabase, 6 * 60 * 60 * 1000);