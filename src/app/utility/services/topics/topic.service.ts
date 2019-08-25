import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';
import { DbTopic } from './db-topic';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(
    private afs: AngularFirestore
  ) { }

  joinTopic(user, topic: DbTopic) {
    const uid = user.uid
    const userDoc = this.afs.collection('users').doc(uid)
    const topicRef: DocumentReference = this.afs.collection('topics').doc(topic.id).ref
    return from(
      userDoc.update({
        topics: firebase.firestore.FieldValue.arrayUnion(topicRef)
      })
        .then(() => {
          topicRef.update({
            members: firebase.firestore.FieldValue.arrayUnion(userDoc.ref)
          })
            .then(() => {
              console.log("Document successfully updated!");
            })
            .catch((error) => {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
            })

        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        })
    )

  }

  getAllTopics(): Observable<Array<DbTopic>> {
=    return this.afs.collection('topics').get().pipe(map(snapshot => {
      const topics = []
      snapshot.docs.forEach(
        doc => {
          const topic = doc.data()
          topics.push(TopicService.toDbTopic(doc.id, topic))
        }
      )
      return topics
    }))
  }

  getTopicsByUser(user) {
    const userUid = user.uid
    return this.afs.collection('users').doc(userUid).get().pipe(map(snapshot => {
      // const userDb = snapshot.data()
      const topicRefs: Array<DocumentReference> = snapshot.data().topics
      topicRefs.forEach( topic => {
        topic.get().then((d) => {
          console.log(d.data())
        })
      })

      return topicRefs
    }))
      // .pipe(from)
      // .pipe(map(a => {
      //   a.forEach(b => {
      //     console.log(b)
      //   })
      // }))
  }

  getTopicById(topicId): Observable<DbTopic> {
    return this.afs.collection('topics').doc(topicId).get().pipe(map(snapshot => {
      return TopicService.toDbTopic(snapshot.id, snapshot.data())
    }))
  }



  private static toDbTopic(id, topic): DbTopic {
    return {
      id: id,
      data: {
        topic: topic.topic,
        iterations: topic.iterations,
        members: topic.members
      },
    }
  }
}
