// تبديل اللغة
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  if (document.documentElement.lang === 'ar') {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    langToggle.textContent = 'العربية';
  } else {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    langToggle.textContent = 'English';
  }
});

// تبديل الوضع الليلي
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// تسجيل دخول تجريبي
function login() {
  let input = document.getElementById('loginInput').value;
  alert("تم إرسال رابط الدخول إلى: " + input);
}

// محاكاة مساعد ذكي
function sendMessage() {
  let box = document.getElementById('chatBox');
  let msg = document.getElementById('userMessage').value;
  if (!msg) return;
  let p = document.createElement('p');
  p.textContent = "👤: " + msg;
  box.appendChild(p);
  let reply = document.createElement('p');
  reply.textContent = "🤖: رد تلقائي على - " + msg;
  box.appendChild(reply);
  document.getElementById('userMessage').value = '';
  box.scrollTop = box.scrollHeight;
}

// صوت (إملاء)
function startVoice() {
  let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = document.documentElement.lang === 'ar' ? 'ar-SA' : 'en-US';
  recognition.start();
  recognition.onresult = function(e) {
    document.getElementById('userMessage').value = e.results[0][0].transcript;
  }
}

// رفع طلب ترخيص
function submitLicense() {
  alert("تم رفع الطلب بنجاح ✅");
}

// منتجات + سلة
const products = [
  {id: 1, name: "شتلة زيتون", price: 5},
  {id: 2, name: "سماد عضوي", price: 10}
];
let cart = [];

window.onload = () => {
  let prodDiv = document.getElementById('products');
  products.forEach(p => {
    let btn = document.createElement('button');
    btn.textContent = `إضافة ${p.name} (${p.price} JD)`;
    btn.onclick = () => addToCart(p);
    prodDiv.appendChild(btn);
  });
}

function addToCart(p) {
  cart.push(p);
  renderCart();
}

function renderCart() {
  let list = document.getElementById('cart');
  list.innerHTML = '';
  cart.forEach(c => {
    let li = document.createElement('li');
    li.textContent = `${c.name} - ${c.price} JD`;
    list.appendChild(li);
  });
}

function checkout() {
  let total = cart.reduce((sum, p) => sum + p.price, 0);
  alert("المجموع: " + total + " JD ✅");
}
