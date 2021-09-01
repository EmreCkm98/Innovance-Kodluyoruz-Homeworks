import firebase from './firebase';

export const database = firebase.firestore();

const applicationFormsRef = database.collection('application-forms');

let id;
export const addAppForm = async (data) => {
  await applicationFormsRef
    .add({
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      identityNumber: data.identityNumber,
      reasonOfApp: data.reasonOfApp,
      address: data.address,
      photosDocs: data.photosDocs[0].name,
      appCode: data.code,
      status: data.status,
      answer: data.answer,
      createdDate: firebase.firestore.Timestamp.now(),
    })
    .then((doc) => {
      id = doc.id;
    });

  return id;
};

export const getAppForms = async () => {
  let tempDoc;
  await applicationFormsRef.get().then((querySnapshot) => {
    tempDoc = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  });
  return tempDoc;
};
export const getAppForm = async (id) => {
  let usercode;

  let tempDoc;
  await applicationFormsRef.get().then((querySnapshot) => {
    tempDoc = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  });
  tempDoc.forEach((element) => {
    if (element.appCode === id) {
      usercode = id;
      console.log(usercode);
      return usercode;
    }
  });

  return usercode;
};

export const getForm = async (id, userStatus, answer) => {
  const db = database.collection('application-forms');
  const queryRef = await db.where('appCode', '==', `${id}`).get();
  console.log(queryRef);
  if (queryRef.empty) {
    console.log('No matching documents.');
    return;
  }
  queryRef.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());

    doc.ref.update({ status: `${userStatus}`, answer: `${answer}` });
  });
};
