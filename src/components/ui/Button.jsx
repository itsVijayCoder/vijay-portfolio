import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import ContactPhoneIcon from "@/assets/icons/phone.svg";

const Button = ({
  title,
  //   id,
  leftIcon,
  rightIcon,
  containerClass,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      // id={id && id}
      className={`group relative z-10 inline-flex h-12 w-max items-center gap-2 rounded-xl px-6 ${containerClass}`}
    >
      {leftIcon && leftIcon}

      <span
        className={
          "font-general relative inline-flex w-full overflow-hidden text-sm font-semibold uppercase"
        }
      >
        <div className="w-full translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>

        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon && rightIcon}
    </button>
  );
};
export default Button;
