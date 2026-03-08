import React, { useLayoutEffect, useRef, useCallback } from 'react';
import { MessageListProps } from './MessageListProps';
import { classNames } from '../../utils/classNames';

export const MessageList: React.FC<MessageListProps> = ({
  children,
  className,
  onYReachStart,
  loadingMore,
  ...props
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevScrollHeight = useRef<number>(0);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollTop === 0 && onYReachStart && !loadingMore) {
      prevScrollHeight.current = target.scrollHeight;
      onYReachStart();
    }
  }, [onYReachStart, loadingMore]);

  useLayoutEffect(() => {
    if (loadingMore || prevScrollHeight.current === 0) return;

    const node = scrollRef.current;
    if (node) {
      const newScrollHeight = node.scrollHeight;
      node.scrollTop = newScrollHeight - prevScrollHeight.current;
      prevScrollHeight.current = 0;
    }
  }, [children, loadingMore]);

  return (
    <div
      {...props}
      className={classNames('cs-message-list', className)}
      onScroll={handleScroll}
      ref={scrollRef}
    >
      {children}
    </div>
  );
};
