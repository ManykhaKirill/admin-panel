import type { FC } from 'react';
import { Card } from '@/shared/ui/Card';
import { PHOTO_URL } from '@/shared/api';
import type { Comment } from '../model/comment';

export const CommentCard: FC<{
  comment: Comment
}> = ({
    comment
}) => {
    return (
        <Card key={comment.id}>
          <div className="flex items-center gap-3">
            <img
              src={PHOTO_URL + comment.id}
              alt={comment.name}
              className="w-10 h-10 rounded-full border border-border"
            />
            <div>
              <h4 className="font-semibold text-text-main">{comment.name}</h4>
              <p className="text-xs text-text-muted">{comment.email}</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-text-secondary">{comment.body}</p>
        </Card>
    )
}