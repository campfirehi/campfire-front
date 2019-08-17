export default class Topic {
    topic: string;
    stage: string;
    member_count: number;
    topic_id: string;
    pic1: string;
    pic2: string;

    constructor(topic, stage, member_count, topic_id, pic1, pic2) {
        this.topic = topic;
        this.stage = stage;
        this.member_count = member_count;
        this.topic_id = topic_id;
        this.pic1 = pic1;
        this.pic2 = pic2;
    }
}