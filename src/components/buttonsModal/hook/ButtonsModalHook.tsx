import {SERVER_PANIC_URL_PATH} from '@src/globals/constants/panicService';
import {Config} from '@src/hooks/config/config';

import {createButtonsFirebase} from '@src/hooks/firebase/buttons/buttons';
import {
  Networks,
  finisSettButton,
  networkSettings,
  showNetworks,
  statusActionsDevice
} from '@src/hooks/shellyActions';
import {GetUserQuery} from '@src/reactQuery/userQuery';
import {ButtonFind, Buttons} from '@src/types/buttons';
import {User} from '@src/types/userTypes';
import {t} from 'i18next';
import {useEffect, useState, useCallback} from 'react';
import {AppState} from 'react-native';
import {v4 as uuid} from 'uuid';

const ButtonsModalHook = ({
  setVisible,
  buttons,
  setButtonFind,
  setNewButtons,
  visible
}: {
  setVisible: (e: boolean) => void;
  buttons: Buttons[];
  setButtonFind: (e: ButtonFind | undefined) => void;
  setNewButtons: (e: Buttons[]) => void;
  visible: boolean;
}) => {
  const {data} = GetUserQuery();
  const user = data.user as unknown as User;
  const [networks, setNetworks] = useState<Networks[]>();
  const [firsStep, setFirsStep] = useState<string>('');
  const [sendSetButton, setSendSetButton] = useState(false);
  const [nameIsd, setNameIsd] = useState<string>();
  const [passIsd, setPassIsd] = useState<string>();
  const [currentButton, setCurrentButton] = useState<Buttons>();
  const [internetError, setInternetError] = useState(false);
  const [urlConfigButton, setUrlConfigButton] = useState<string>();
  const [savingData, setSavingData] = useState(false);
  const [buttonExist, setButtonExist] = useState(false);
  const [unConnectedShellyButton, setUnConnectedShellyButton] = useState(false);
  const [buttonNotReady, setButtonNotReady] = useState(false);
  const networksStatus = !networks ? true : false;

  const hideModal = () => (
    setVisible(false),
    setTimeout(() => {
      setNetworks(undefined);
    }, 1000)
  );

  const getMyNetworks = useCallback(async () => {
    if (!networks) {
      const networksResult = await showNetworks();
      if (networksResult && networksResult[0].error) {
        setNetworks(undefined);
      } else {
        setNetworks(networksResult);
      }
    }
  }, [networks]);

  const validateStatusButton = (currentButton: Buttons) => {
    statusActionsDevice()
      .then(result => {
        if (result) {
          const findButton = buttons.find(
            value => value.reference == currentButton.reference
          );
          if (!findButton) {
            const buttonIsReady = result.actions.shortpush_url[0].enabled;
            if (buttonIsReady) {
              finisSettButton(currentButton.isd, currentButton.pass);
              setButtonNotReady(false);
              saveButtonOnBd(buttons);
            } else {
              setButtonNotReady(true);
              setSavingData(false);
            }
            setButtonExist(false);
          } else {
            setButtonExist(true);
            setSavingData(false);
            setUrlConfigButton(undefined);
          }
          setUnConnectedShellyButton(false);
        } else {
          setSavingData(false);
          setUnConnectedShellyButton(true);
        }
      })
      .catch(err => {
        console.debug('err', err);
        setSavingData(false);
      });
  };

  const saveButtonOnBd = (buttons: Buttons[]) => {
    currentButton &&
      createButtonsFirebase(currentButton, user)
        .then(() => {
          const newCurrenButtons = [...buttons];
          newCurrenButtons.push(currentButton);
          setSavingData(true);
          setNewButtons(newCurrenButtons);
          setUrlConfigButton(undefined);
          setInternetError(false);
          setSavingData(false);
          setVisible(false);
          setButtonFind(null);
          hideModal();
        })
        .catch(error => {
          console.debug('errorSaveButtonBd', error && error);
        });
  };

  const saveButton = async () => {
    setSavingData(true);
    currentButton && validateStatusButton(currentButton);
  };

  useEffect(() => {
    const setButton = async () => {
      if (nameIsd && passIsd) {
        networkSettings()
          .then(response => {
            const btnAction = response.myConfig.device.hostname.split('-')[1];
            const url = `${SERVER_PANIC_URL_PATH}api/pushB?id=${btnAction}`;
            const random = uuid();
            const dataBtnBd = {
              title: t('notifications.title'),
              body: `${user.alias}: ${t('notifications.body')}`,
              cost: 0,
              date: Date.now().toString(),
              name: response.myConfig.device.hostname,
              reference: btnAction,
              uid: random.toString(),
              isd: nameIsd,
              pass: passIsd,
              server: url
            };
            setCurrentButton(dataBtnBd);
            setSendSetButton(false);
            setUrlConfigButton(response.button);
          })
          .catch(err => {
            console.debug('errorSetButtonShelly', err);
            setSendSetButton(false);
          });
      }
    };
    sendSetButton && setButton();
  }, [nameIsd, passIsd, sendSetButton, user.alias]);

  useEffect(() => {
    visible && getMyNetworks();
  }, [getMyNetworks, visible]);

  useEffect(() => {
    const appMode = AppState.addEventListener(
      'change',
      value => value === 'active' && getMyNetworks()
    );
    return () => appMode.remove();
  }, [getMyNetworks]);

  useEffect(() => {
    setNameIsd(firsStep.toString());
  }, [firsStep]);

  return {
    networks,
    firsStep,
    setFirsStep,
    hideModal,
    networksStatus,
    sendSetButton,
    setSendSetButton,
    setNameIsd,
    setPassIsd,
    urlConfigButton,
    saveButton,
    internetError,
    savingData,
    passIsd,
    config: Config(),
    buttonExist,
    setButtonExist,
    unConnectedShellyButton,
    buttonNotReady
  };
};

export {ButtonsModalHook};
