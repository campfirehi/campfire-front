import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, fromDocRef } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { map, mergeMap, reduce, combineAll, toArray, concatMap, mergeAll } from 'rxjs/operators';
import { DbTopic } from './db-topic';
import { Observable, from, merge, empty, combineLatest } from 'rxjs';
import { AuthGuardService } from '../auth/auth-guard';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(
    private afs: AngularFirestore,
    private authGuard: AuthGuardService
  ) { }

  joinTopic(topic: DbTopic) {
    const uid = this.authGuard.getUserUID()
    if (uid) {
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
    } else {
      return null
    }

  }

  getAllTopics(): Observable<Array<DbTopic>> {
    return this.afs.collection('topics').get().pipe(map(snapshot => {
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

  getTopicsByUser() {
    const userUid = this.authGuard.getUserUID()
    if (userUid) {
      // return this.afs.collection('users').doc(userUid).get().pipe(map(snapshot => {
      //   const topicRefs: Array<DocumentReference> = snapshot.data().topics
      //   return topicRefs.map(ref => fromDocRef(ref))
      // })).pipe(
      //   mergeMap(obs => obs.map(newObs => {
      //     console.log('in middle merge map')
      //     return newObs.pipe(map(snashot =>
      //       TopicService.toDbTopic(snashot.payload.id, snashot.payload.data()))
      //     )
      //   })))
      //   .pipe(mergeMap(response => {
      //     console.log('in last merge map')
      //     return merge(response)
      //   }))
      //   .pipe()

      return this.afs.collection('users').doc(userUid).get().pipe(map(snapshot => {
        const topicRefs: Array<DocumentReference> = snapshot.data().topics
        const refs = topicRefs.map(ref => fromDocRef(ref))
        const topics = refs.map(ref => ref.pipe(
          map(snashot => TopicService.toDbTopic(snashot.payload.id, snashot.payload.data())
          )))

        return topics
      })).pipe(mergeMap(response => {
        console.log('in last merge map')
        return merge(response)
      })).pipe(mergeAll(10))


    } else {
      return empty().pipe(map(_ => []))
    }

    /*
      given an array of observables
      for each observable
        map it to a new observable that calls payload.data() when subscribed
      
      for each new observable
        subscribe it (merge)

    */
  }

  getTopicById(topicId): Observable<DbTopic> {
    return this.afs.collection('topics').doc(topicId).get().pipe(map(snapshot => {
      return TopicService.toDbTopic(snapshot.id, snapshot.data())
    }))
  }

  createTopic(newTopic) {
    return from(this.afs.collection('topics').add({
      topic: newTopic,
      discussions: [],
      members: [],
      iterations: [
        {
          stages: [
            {
              board_url: ''
            }
          ]
        }
      ]
    }))
  }

  leaveTopic(topicId) {
    const userId = this.authGuard.getUserUID()
    if (userId) {
      const userDoc = this.afs.collection('users').doc(userId)
      const topicDoc = this.afs.collection('topics').doc(topicId)

      return from(topicDoc.update({
        members: firebase.firestore.FieldValue.arrayRemove(userDoc.ref)
      }).then(() => {
        userDoc.update({
          topics: firebase.firestore.FieldValue.arrayRemove(topicDoc.ref)
        })
      }))
    }
  }

  private static toDbTopic(id, topic): DbTopic {
    return {
      id: id,
      data: {
        topic: topic.topic,
        iterations: topic.iterations,
        members: topic.members,
        discussions: topic.discussions
      },
    }
  }

  static convertStageIndexToName(index: number) {
    return ['Empathize', 'Define', 'Ideate', 'Prototype', 'Test'][index]
  }
}
