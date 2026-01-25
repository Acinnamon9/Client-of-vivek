import React from "react";

interface ProofTestimonialProps {
  testimonial: string;
  author: string;
  role: string;
}

/**
 * ProofTestimonial Component
 * Renders the quote card with author attribution.
 */
const ProofTestimonial: React.FC<ProofTestimonialProps> = ({
  testimonial,
  author,
  role,
}) => {
  return (
    <div className="bg-(--muted)/30 rounded-2xl p-8 sm:p-10 flex flex-col justify-center border border-(--border)">
      <div className="mb-6 text-brand-primary">
        {/* Simple Quote Icon */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-20"
        >
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
        </svg>
      </div>
      <blockquote className="text-xl font-medium text-(--foreground) italic leading-relaxed mb-6">
        "{testimonial}"
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center font-bold text-brand-primary">
          {author.charAt(0)}
        </div>
        <div>
          <cite className="not-italic font-bold text-(--foreground) block">
            {author}
          </cite>
          <span className="text-xs text-(--muted-foreground) uppercase tracking-wider">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProofTestimonial;
