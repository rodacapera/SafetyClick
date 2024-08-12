import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {Config} from '@src/hooks/config/config';
import {SetPanicsQuery} from '@src/reactQuery/notifyQuery';
import {
  SetButtonsQuery,
  SetCompanyImagesQuery,
  SetEmployeesQuery,
  SetShopQuery,
  SetUserQuery
} from '@src/reactQuery/userQuery';
import {Buttons} from '@src/types/buttons';
import {Panics, User} from '@src/types/userTypes';
import {useEffect, useState} from 'react';

const useGetUser = () => {
  const {isLoading, error, data} = SetUserQuery();
  const currentData = data;
  const user: User | undefined = data?.user;
  const configuration = Config();
  const [panics, setPanics] = useState<Panics[]>([]);
  const [buttons, setButtons] = useState<Buttons[]>([]);
  const [counterButtons, setCounterButtons] = useState<number>(0);

  const [employees, setEmployees] = useState<User[]>([]);
  const [counterEmployees, setCounterEmployees] = useState<number>(0);
  const [shopId, setShopId] = useState<string>('');

  SetEmployeesQuery(employees);
  SetPanicsQuery(panics);
  SetShopQuery(shopId);
  SetButtonsQuery(buttons);
  SetCompanyImagesQuery();

  const resultPanics = (
    querySnapshot: FirebaseFirestoreTypes.QuerySnapshot
  ) => {
    setPanics([]);
    querySnapshot.forEach(documentSnapshot => {
      const data = documentSnapshot.data() as Panics;
      setPanics(prev => [...prev, data]);
    });
  };

  const resultButtons = (
    querySnapshot: FirebaseFirestoreTypes.QuerySnapshot
  ) => {
    setButtons([]);
    querySnapshot.forEach(value => {
      const data = value.data() as Buttons;
      setButtons(prev => [...prev, data]);
    });
    setCounterButtons(querySnapshot.size >= 1 ? querySnapshot.size : 0);
  };

  useEffect(() => {
    currentData?.user &&
      !shopId &&
      setShopId(currentData.user.shop.split('/')[1]);
  }, [currentData, shopId]);

  useEffect(() => {
    employees.length > 0 && setCounterEmployees(employees.length);
  }, [employees.length]);

  useEffect(() => {
    if (currentData?.panicsObserver) {
      const panicsObserver = currentData.panicsObserver.onSnapshot(
        (documentSnapshot: FirebaseFirestoreTypes.QuerySnapshot) => {
          !documentSnapshot?.empty && documentSnapshot?.size > 0
            ? resultPanics(documentSnapshot)
            : setPanics([]);
        }
      );
      return () => panicsObserver();
    }
  }, [currentData]);

  useEffect(() => {
    if (currentData?.buttonsObserver) {
      const buttonsObserver = currentData.buttonsObserver.onSnapshot(
        (documentSnapshot: FirebaseFirestoreTypes.QuerySnapshot) => {
          documentSnapshot && documentSnapshot?.size > 0
            ? resultButtons(documentSnapshot)
            : (setButtons([]), setCounterButtons(0));
        }
      );
      return () => buttonsObserver();
    }
  }, [currentData]);

  useEffect(() => {
    if (
      currentData?.employeesObserver &&
      employees.length == 0 &&
      !counterEmployees
    ) {
      const resultEmployees = (
        querySnapshot: FirebaseFirestoreTypes.QuerySnapshot
      ) => {
        setEmployees([]);
        querySnapshot.forEach(value => {
          const data = value.data() as User;
          if (querySnapshot.size > 1) {
            !data.administrator && setEmployees(prev => [...prev, data]);
          } else {
            setEmployees([]);
          }
        });
      };
      const employeesObserver = currentData.employeesObserver.onSnapshot(
        (documentSnapshot: FirebaseFirestoreTypes.QuerySnapshot) => {
          documentSnapshot && documentSnapshot.size > 0
            ? resultEmployees(documentSnapshot)
            : (setEmployees([]), setCounterEmployees(0));
        }
      );
      return () => employeesObserver();
    }
  }, [counterEmployees, currentData, employees.length]);

  return {
    user,
    panics,
    employees,
    counterEmployees,
    isLoading,
    error,
    buttons,
    counterButtons,
    configuration
  };
};

export {useGetUser};
