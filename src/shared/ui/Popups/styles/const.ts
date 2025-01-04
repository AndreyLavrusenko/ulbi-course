import { DropDownDirection } from "@/shared/types/ui";
import cls from "./popup.module.scss";

export const mapDirectionClass: Record<DropDownDirection, string> = {
    "bottom left": cls.OptionBottomLeft,
    "bottom right": cls.OptionBottomRight,
    "top left": cls.OptionTopLeft,
    "top right": cls.OptionTopRight,
};
