import { Reducer, useCallback } from "react";
import { useReducer } from "react";

const INITIAL_VALUE: IReviewForm = {
  text: "",
  rating: 5,
};

enum ReviewFormActionType {
  SET_TEXT,
  SET_RATING,
}

export interface IReviewForm {
  text: string;
  rating: number;
}

type ReviewFormReducerAction =
  | {
      type: ReviewFormActionType.SET_TEXT;
      payload: string;
    }
  | {
      type: ReviewFormActionType.SET_RATING;
      payload: number;
    };

const reducer: Reducer<IReviewForm, ReviewFormReducerAction> = (
  state: IReviewForm,
  { type, payload }: ReviewFormReducerAction
): IReviewForm => {
  switch (type) {
    case ReviewFormActionType.SET_TEXT:
      return {
        ...state,
        text: payload,
      };
    case ReviewFormActionType.SET_RATING:
      return {
        ...state,
        rating: payload,
      };

    default:
      return state;
  }
};

export type TUseReviewForm = (initialState?: IReviewForm) => {
  form: IReviewForm;
  setText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setRating: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useReviewForm: TUseReviewForm = (initialState = INITIAL_VALUE) => {
  const [form, dispatch] = useReducer(reducer, initialState);

  // Более простой вариант reducer-a имеет вид (передаем тип action-a извне):
  // const setValue = (type, value) => dispatch({type, payload: value})
  // return {
  //   form,
  //   setValue
  // };

  // useCallback нужен, чтобы возвращалась ссылка на старую функцию при каждом рендере, если зависимости в [] не изменились
  // при этом физически при каждом рендере создается новая функция, но вернется ли новая или старая функция зависит от того, изменились ли зависимости
  const setText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ReviewFormActionType.SET_TEXT,
      payload: event.target.value,
    });
  }, []);

  const setRating = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({
        type: ReviewFormActionType.SET_RATING,
        payload: Number(event.target.value),
      }),
    []
  );

  return {
    form,
    setText,
    setRating,
  };
};
