import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Typography } from "@/components/shared";

import { formatBytes, isFileWithPreview } from "@/lib/utils";
import FilePreview from "./file-preview";

interface FileCardProps {
  file: File;
  onRemove: () => void;
  progress?: number;
}

function FileCard({ file, progress, onRemove }: FileCardProps) {
  return (
    <div className="relative flex items-center gap-2.5">
      <div className="flex flex-1 gap-2.5">
        {isFileWithPreview(file) && <FilePreview file={file} />}
        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-col gap-px">
            <Typography className="line-clamp-1 text-sm font-medium text-foreground/80">
              {file.name}
            </Typography>
            <Typography className="text-xs text-muted-foreground">
              {formatBytes(file.size)}
            </Typography>
          </div>
          {progress && <Progress value={progress} />}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-7"
          onClick={onRemove}
        >
          <X className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}

export default FileCard;
