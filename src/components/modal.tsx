'use client';

import { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ModalProps extends React.ComponentProps<typeof Dialog> {
  trigger?: ReactNode;
  children: ReactNode;
  title?: string | ReactNode;
  description?: string | ReactNode;
  wrapper?: boolean;
  className?: string;
}

const Wrapper = ({ children, wrapper, ...props }: ModalProps) => {
  return !wrapper ? <>{children}</> : <Dialog {...props}>{children}</Dialog>;
};

function GenericModal({
  trigger,
  title,
  description,
  children,
  wrapper = true,
  className,
  ...props
}: ModalProps) {
  return (
    <Wrapper wrapper={wrapper} {...props}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        className={className}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DialogHeader>
          {title ? (
            <DialogTitle>{title}</DialogTitle>
          ) : (
            <DialogTitle className='sr-only'>Certificate</DialogTitle>
          )}
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : (
            <DialogDescription className='sr-only'>
              Certificate details
            </DialogDescription>
          )}
        </DialogHeader>
        {children}
      </DialogContent>
    </Wrapper>
  );
}

/**
 * https://ui.shadcn.com/docs/components/dialog
 */
export function DialogWrapper({
  children,
  modalContent,
}: {
  modalContent: ReactNode;
  children: ReactNode;
}) {
  return (
    <Dialog>
      <>{children}</>
      <>{modalContent}</>
    </Dialog>
  );
}

interface GenericDialogProps {
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
  children: ReactNode;
  onClose?: () => void;
}

function Modal(props: GenericDialogProps) {
  const router = useRouter();
  const onOpenChange = (open: boolean) => {
    if (!open) {
      if (props.onClose) {
        props.onClose();
        return;
      }
      router.back();
    }
  };

  return (
    <GenericModal
      onOpenChange={onOpenChange}
      defaultOpen
      title={props.title}
      description={props.description}
      className={cn(
        props.className,
        'mt-10 max-h-screen overflow-y-scroll sm:max-w-max bg-card text-card-foreground'
      )}
    >
      {props.children}
    </GenericModal>
  );
}

Modal.displayName = 'Modal';

export const ModalImage = ({
  src,
  className,
  ...props
}: ComponentProps<typeof Image>) => {
  return (
    <div className={cn('relative', className)}>
      <Image src={src} {...props} />
    </div>
  );
};

export default Modal;
