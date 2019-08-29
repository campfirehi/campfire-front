import { DocumentReference } from '@angular/fire/firestore';

export interface DbIteration {
    stages: Array<DbStage>
}

export interface DbStage {
    board_url: string
}

export interface DbTopic {
    id: string;
    data: {
        topic: string;
        iterations: Array<DbIteration>;
        members: Array<any>
        discussions: Array<string>
    }
}