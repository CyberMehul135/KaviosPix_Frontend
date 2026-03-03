import { Button } from "@/components/ui/button";
import { ImagesIcon, Plus } from "lucide-react";

export default function EmptyUi({
  className,
  icon: Icon = DefaultIcon,
  headline = "No photos yet",
  description = " Your album is waiting for its first memory. Upload photos to bring this album to life!",
  buttonLabel = "Upload Photos",
  onBtnClick,
}) {
  return (
    <div className={`flex flex-col items-center py-10 ${className}`}>
      {/* Icon */}
      {Icon && <Icon />}

      <div className="text-center mt-4">
        {/* Headline */}
        <h4 className="text-xl">{headline}</h4>
        {/* Description */}
        <p className="text-[13px] leading-relaxed font-extralight mt-2 text-muted-foreground max-w-92.5">
          {description}
        </p>
        {/* Button */}
        <Button variant="primary" className="mt-4" onClick={onBtnClick}>
          <Plus /> {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

const DefaultIcon = () => {
  return (
    <div className="relative w-40 h-32">
      <div className="absolute left-4 top-2 w-20 h-24 border border-primary/10 rounded-2xl -rotate-6 shadow-sm bg-primary/5 hover:-translate-y-1 transition-all ease-in duration-200"></div>
      <div className="absolute right-4 top-2 w-20 h-24 border border-border/30 rounded-2xl rotate-6 shadow-sm bg-accent/60 hover:-translate-y-1 transition-all ease-in duration-200"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-28 border border-border/50 rounded-2xl shadow-md bg-card flex flex-col justify-center items-center hover:-translate-y-1.5 transition-all ease-in duration-200">
        <ImagesIcon
          className="p-2 box-content overflow-visible bg-primary/10 rounded-full text-blue-500"
          size={24}
        />
        <div className="flex gap-0.5 mt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary/25"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary/15"></div>
        </div>
      </div>
    </div>
  );
};
