"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns-jalali";
import { Comment } from "@/types/Landing/Comments";
import {
  getHouseComments,
  createComment,
} from "@/utils/services/api/CommentService/CommentService";
import { useForm } from "react-hook-form";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

const CommentForm = ({
  onSubmit,
  onCancel,
  isSubmitting,
  register,
  errors,
  handleSubmit,
  rating,
  setRating,
  message,
}: any) => (
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="p-4 mt-4 rounded-xl space-y-4"
  >
    <input
      {...register("title", { required: true })}
      placeholder="عنوان نظر..."
      className="w-full p-3 rounded-lg border text-right"
    />
    {errors.title && <p className="text-red-500 text-sm">عنوان الزامی است.</p>}

    <textarea
      {...register("caption", { required: true })}
      placeholder="نظر خود را بنویسید..."
      className="w-full p-3 rounded-lg border text-right"
      rows={3}
    />
    {errors.caption && (
      <p className="text-red-500 text-sm">متن نظر الزامی است.</p>
    )}

    <div className="flex justify-center gap-1 text-2xl mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          className={star <= rating ? "text-yellow-400" : "text-gray-400"}
        >
          ★
        </button>
      ))}
    </div>
    {rating === 0 && (
      <p className="text-red-500 text-sm text-center">امتیاز را انتخاب کنید.</p>
    )}

    <div className="flex gap-2">
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-full font-bold"
      >
        ارسال
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-full font-bold"
      >
        انصراف
      </button>
    </div>

    {message && (
      <p className="text-green-600 text-sm text-center mt-2">{message}</p>
    )}
  </form>
);

const CommentItem = ({
  comment,
  isReplying,
  onReply,
  renderReplies,
  replyForm,
  repliesCount,
  isExpanded,
  toggleReplies,
}: any) => (
  <div className="rounded-xl p-4">
    <div className="flex items-start gap-3 mb-2">
      {/* Profile Picture Area */}
      <div className="flex-shrink-0">
        {comment.user.profilePicture ? (
          <img
            src={comment.user.profilePicture}
            alt={`${comment.user.fullName}'s profile`}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-sm">
              {comment.user.fullName.charAt(0)}
            </span>
          </div>
        )}
      </div>
      {/* Comment Content */}
      <div className="flex-1">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <span className="font-semibold">{comment.user.fullName}</span>
            <span className="text-sm text-gray-500">
              {format(new Date(comment.created_at), "dd  MMMM yyyy")}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm mt-1">
            <span className="text-gray-500">امتیاز:</span>
            <div className="flex text-lg">
              {[1, 2, 3, 4, 5].map((star) => {
                const rating = comment.rating ? parseFloat(comment.rating) : 0;
                if (star <= Math.floor(rating)) {
                  return (
                    <FaStar
                      key={star}
                      className="text-yellow-400"
                      aria-label="ستاره پر"
                    />
                  );
                } else if (
                  star === Math.ceil(rating) &&
                  rating % 1 >= 0.5 &&
                  rating % 1 < 1
                ) {
                  return (
                    <FaStarHalfAlt
                      key={star}
                      className="text-yellow-400 scale-x-[-1]"
                      aria-label="ستاره نیمه پر"
                    />
                  );
                } else {
                  return (
                    <FaRegStar
                      key={star}
                      className="text-gray-400"
                      aria-label="ستاره خالی"
                    />
                  );
                }
              })}
            </div>
            {comment.rating && (
              <span className="text-gray-500 mr-2">({comment.rating})</span>
            )}
          </div>
        </div>
        {comment.title && <p className="font-bold mt-1">{comment.title}</p>}
        <p className="mt-1">{comment.caption}</p>
        <div className="flex gap-4 mt-2">
          <button
            onClick={() => onReply(comment.id)}
            className="text-blue-600 text-sm hover:underline"
          >
            پاسخ دادن
          </button>
          {repliesCount > 1 && (
            <button
              onClick={() => toggleReplies(comment.id)}
              className="text-gray-500 text-sm hover:underline"
              aria-label={
                isExpanded ? "بستن پاسخ‌ها" : `نمایش ${repliesCount} پاسخ`
              }
            >
              {isExpanded ? (
                <div className="flex items-center gap-1">
                  بستن پاسخ‌ها
                  <FaChevronUp />
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  نمایش {repliesCount} پاسخ
                  <FaChevronDown />
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </div>

    {isReplying && replyForm}
    {renderReplies(comment.id)}
  </div>
);

const ReserveDeComments = ({ houseId }: { houseId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [expandedReplies, setExpandedReplies] = useState<string[]>([]);
  const [formMessage, setFormMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { title: "", caption: "", rating: 0 } });

  const rating = watch("rating");

  const setRating = (value: number) => setValue("rating", value);

  const refreshComments = async () => {
    const data = await getHouseComments(houseId);
    setComments(data);
  };

  useEffect(() => {
    if (houseId) refreshComments();
  }, [houseId]);

  const onSubmit = async (data: any) => {
    try {
      await createComment(houseId, {
        ...data,
        parent_comment_id: replyTo || null,
      });
      setFormMessage("✅ نظر شما با موفقیت ثبت شد.");
      reset();
      setReplyTo(null);
      refreshComments();
    } catch (error) {
      setFormMessage("❌ ارسال نظر با خطا مواجه شد.");
    }
  };

  const toggleReplies = (parentId: string) => {
    setExpandedReplies((prev) =>
      prev.includes(parentId)
        ? prev.filter((id) => id !== parentId)
        : [...prev, parentId]
    );
  };

  const renderReplies = (parentId: string) => {
    const replies = comments.filter((c) => c.parent_comment_id === parentId);
    const isExpanded = expandedReplies.includes(parentId);
    if (replies.length === 0) return null;

    return (
      <div className="mt-2">
        <div className={isExpanded ? "block" : "hidden"}>
          {replies.map((reply) => (
            <div key={reply.id} className="mr-6 mt-4 relative pr-4">
              <div className="absolute top-11">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.667 17.5V15.7692C16.667 14.1017 16.667 13.2681 16.5459 12.5705C15.8792 8.73042 12.5782 5.71869 8.36916 5.11049C7.60457 5 5.99464 5 4.16699 5"
                    stroke="#586CFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.83301 2.5C5.32731 2.99153 3.33301 4.29977 3.33301 5C3.33301 5.70022 5.32731 7.00847 5.83301 7.5"
                    stroke="#586CFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="rounded-xl p-4">
                <CommentItem
                  comment={reply}
                  isReplying={replyTo === reply.id}
                  onReply={setReplyTo}
                  renderReplies={renderReplies}
                  repliesCount={
                    comments.filter((c) => c.parent_comment_id === reply.id)
                      .length
                  }
                  isExpanded={expandedReplies.includes(reply.id)}
                  toggleReplies={toggleReplies}
                  replyForm={
                    replyTo === reply.id && (
                      <CommentForm
                        onSubmit={onSubmit}
                        onCancel={() => setReplyTo(null)}
                        isSubmitting={isSubmitting}
                        register={register}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        rating={rating}
                        setRating={setRating}
                        message={formMessage}
                      />
                    )
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const parentComments = comments.filter((c) => c.parent_comment_id === null);

  return (
    <div className="space-y-6">
      {parentComments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          isReplying={replyTo === comment.id}
          onReply={setReplyTo}
          renderReplies={renderReplies}
          repliesCount={
            comments.filter((c) => c.parent_comment_id === comment.id).length
          }
          isExpanded={expandedReplies.includes(comment.id)}
          toggleReplies={toggleReplies}
          replyForm={
            replyTo === comment.id && (
              <CommentForm
                onSubmit={onSubmit}
                onCancel={() => setReplyTo(null)}
                isSubmitting={isSubmitting}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                rating={rating}
                setRating={setRating}
                message={formMessage}
              />
            )
          }
        />
      ))}
    </div>
  );
};

export default ReserveDeComments;
