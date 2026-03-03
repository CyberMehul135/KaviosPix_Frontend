import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { LayoutDashboard, LayoutGrid } from "lucide-react";
import { setImageLayout } from "@/features/image/imageSlice";

export default function Header({
  title,
  description,
  descriptionValue,
  label,
  icon: Icon,
  onBtnClick,
  imageLayout = false,
}) {
  const dispatch = useDispatch();
  const { isImageLayoutGrid } = useSelector((state) => state.image);

  return (
    <div className="flex items-center justify-between mb-6">
      <header>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm text-text-secondary">
          {descriptionValue} {description}
        </p>
      </header>

      {/* Image-Layout options */}
      {imageLayout && (
        <div className="flex gap-1">
          <LayoutDashboard
            size={20}
            className={`${!isImageLayoutGrid ? "bg-muted-foreground/30" : ""}  p-1 box-content rounded-sm`}
            onClick={() => dispatch(setImageLayout({ isGrid: false }))}
          />
          <LayoutGrid
            size={20}
            className={`${isImageLayoutGrid ? "bg-muted-foreground/30" : ""} p-1 box-content rounded-sm hover:bg-muted-foreground/10`}
            onClick={() => dispatch(setImageLayout({ isGrid: true }))}
          />
        </div>
      )}

      {label && (
        <Button variant="primary" onClick={onBtnClick}>
          {Icon && <Icon />} {label}
        </Button>
      )}
    </div>
  );
}
