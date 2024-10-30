import React from "react";
import PropTypes from "prop-types";
import AppIcon from "../Icon/AppIcon";

const customSize = {
  sm: {
    labelOnly: "h-8 text-sm px-4",
    iconOnly: "h-8 px-2",
    both: {
      left: "h-8 text-sm sm:pl-3 sm:pr-4 px-2",
      right: "h-8 text-sm sm:pr-3 sm:pl-4 px-2",
    },
    icon: "size-4",
    icon_gap: "sm:gap-1",
  },
  md: {
    labelOnly: "h-11 text-base px-6",
    iconOnly: "h-11 px-3",
    both: {
      left: "h-11 text-base sm:pl-5 sm:pr-6 px-3",
      right: "h-11 text-base sm:pr-5 sm:pl-6 px-3",
    },
    icon: "size-5",
    icon_gap: "sm:gap-2",
  },
  lg: {
    labelOnly: "h-14 text-base px-8",
    iconOnly: "h-14 px-4",
    both: {
      left: "h-14 text-base sm:pl-6 sm:pr-8 px-4",
      right: "h-14 text-base sm:pr-6 sm:pl-8 px-4",
    },
    icon: "size-6",
    icon_gap: "sm:gap-2",
  },
};

const customType = {
  fill: "border-sunshineYellow bg-sunshineYellow text-black",
  outline: "border-sunshineYellow bg-transparent text-sunshineYellow",
};

const AppButton = ({
  label = null,
  onClick,
  type = "fill",
  size = "sm",
  disable = false,
  icon = null,
  iconPosition = "none",
}) => {
  const buttonSize = () => {
    switch (true) {
      case label && icon && iconPosition === "left":
        return customSize[size].both.left;
      case label && icon && iconPosition === "right":
        return customSize[size].both.right;
      case label && !icon:
        return customSize[size].labelOnly;
      case icon && !label:
        return customSize[size].iconOnly;
    }
  };
  const buttonIcon = customSize[size].icon;
  const iconGap = customSize[size].icon_gap;
  const buttonType = customType[type];

  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`flex justify-center items-center ${size === "sm"? "rounded-lg" : "rounded-xl"} border ${buttonSize()} ${buttonType} ${
        label && icon ? iconGap : ""
      }`}
    >
      {/* icon only */}
      {icon && iconPosition === "none" && (
        <AppIcon icon={icon} style={buttonIcon} />
      )}

      {/* label and icon */}
      {icon && iconPosition === "left" && (
        <AppIcon icon={icon} style={buttonIcon} />
      )}
      {label && (
        <span className={icon ? "hidden sm:block" : ''}>{label}</span>
      )}
      {icon && iconPosition === "right" && (
        <AppIcon icon={icon} style={buttonIcon} />
      )}
    </button>
  );
};

AppButton.ProtoTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["fill", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disable: PropTypes.bool,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(["none","left", "right"]),
};
export default AppButton;
