export interface Stage {
    level: number;
    name: string;
};

export interface DetailedTopic {
    topic: string;
    stage: Stage;
    member_count: number;
    topic_id: string;
    board_url: string;
};