import {LoginFormAction} from './loginTypes';

export type HeaderOtpParams = {
  setButtonAction: (e: LoginFormAction) => void;
  setCode: (e: string) => void;
  counter: number;
  goBack?: boolean;
};
