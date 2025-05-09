export default function ContactUsPage() {
  return (
    <section className="min-h-screen py-20 px-8 ">
      <h1 className="text-3xl font-bold mb-6 text-center">تماس با ما</h1>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="نام شما"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="ایمیل شما"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="پیامتان را بنویسید..."
          className="w-full p-3 border rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded"
        >
          ارسال
        </button>
      </form>
    </section>
  );
}
