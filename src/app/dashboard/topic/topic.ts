export default class Topic {
    topic: string;
    stage: string;
    member_count: number;
    topic_id: string;

    constructor(topic, stage, member_count, topic_id) {
        this.topic = topic;
        this.stage = stage;
        this.member_count = member_count;
        this.topic_id = topic_id;
    }
}