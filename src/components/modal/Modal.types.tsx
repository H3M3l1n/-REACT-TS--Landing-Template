import type { FunctionTypeVoid } from '../../types/general.types';

export interface ModalProps {
  modalSwitch: FunctionTypeVoid;
}

export type InputNamesType = 'name' | 'phone' | 'email';

export interface InputsType {
  id: number;
  name: InputNamesType;
  type: string;
  placeholder: string;
  ref: React.RefObject<HTMLInputElement | null>;
  regex: RegExp;
  maxLength?: number;
}
