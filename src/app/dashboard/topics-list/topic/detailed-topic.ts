export interface Stage {
    level: number;
    name: string;
    max_stage: number;
};

export interface DetailedTopic {
    topic: string;
    stage: Stage;
    member_count: number;
    topic_id: string;
    board_url: string;
};