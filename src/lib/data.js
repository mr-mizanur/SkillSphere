export async function getCategories() {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/news/categories"
    );
    if (!res.ok) throw new Error("Categories load hotte somossya hocche");
    
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error:", error);
    return []; // এরর হলে খালি অ্যারে পাঠাবে যাতে ম্যাপ ফাংশন ক্র্যাশ না করে
  }
}

export async function getNewsByCategoryId(category_id) {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${category_id}`
    );
    if (!res.ok) throw new Error("News load hotte somossya hocche");

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function getNewsDetailsById(news_id) {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/${news_id}`
    );
    if (!res.ok) throw new Error("Details load hotte somossya hocche");

    const data = await res.json();
    return data.data?.[0] || null; // ডাটা না থাকলে নাল পাঠাবে
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}