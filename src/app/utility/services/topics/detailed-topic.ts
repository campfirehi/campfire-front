export interface Stage {
    level: number;
    name: string;
    board_url: string;
};

export interface DetailedTopic {
    topic: string;
    current_stage: Stage;
    member_count: number;
    topic_id: string;
    best_level: number;
    max_level: number;
};