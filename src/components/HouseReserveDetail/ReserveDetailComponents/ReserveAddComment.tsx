"use client";

import { createComment } from "@/utils/services/api/CommentService/CommentService";
import { useState } from "react";
import { useForm } from "react-hook-form";

type AddCommentProps = {
  houseId: string;
};

type CommentForm = {
  title: string;
  caption: string;
  rating: number;
};

export default function AddCommentForm({ houseId }: AddCommentProps) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CommentForm>({
    defaultValues: {
      rating: 0,
    },
  });

  const [message, setMessage] = useState<string | null>(null);
  const rating = watch("rating");

  const onSubmit = async (data: CommentForm) => {
    try {
      await createComment(houseId, {
        title: data.title,
        caption: data.caption,
        rating: data.rating,
      });

      setMessage("✅ نظر شما با موفقیت ثبت شد.");
      reset();
    } catch (error) {
      console.error("Error submitting comment:", error);
      setMessage("❌ ارسال نظر با خطا مواجه شد.");
    }
  };

  const handleStarClick = (value: number) => {
    setValue("rating", value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 rounded-xl space-y-4"
    >
      <input
        {...register("title", { required: true })}
        placeholder="عنوان نظر..."
        className="w-full p-3 rounded-lg border text-right"
      />
      {errors.title && (
        <p className="text-red-500 text-sm">عنوان الزامی است.</p>
      )}

      <textarea
        {...register("caption", { required: true })}
        placeholder="نظر خود را درباره این هتل بنویسید..."
        className="w-full p-3 rounded-lg border text-right"
        rows={4}
      />
      {errors.caption && (
        <p className="text-red-500 text-sm">لطفاً نظر خود را وارد کنید.</p>
      )}

      <div className="flex justify-center gap-1 text-2xl mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleStarClick(star)}
            className={star <= rating ? "text-yellow-400" : "text-gray-400"}
          >
            ★
          </button>
        ))}
      </div>
      {rating === 0 && (
        <p className="text-red-500 text-sm text-center">
          امتیاز را انتخاب کنید.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-full font-bold"
      >
        ارسال نظر
      </button>

      {message && <p className="text-sm text-center mt-2">{message}</p>}
    </form>
  );
}
