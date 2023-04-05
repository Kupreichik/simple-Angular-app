export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ThumbnailsData;
      medium: ThumbnailsData;
      high: ThumbnailsData;
      standard: ThumbnailsData;
      maxres: ThumbnailsData;
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage?: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: Statistics;
}

export type Statistics = {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
};

type ThumbnailsData = {
  url: string;
  width: number;
  height: number;
};
