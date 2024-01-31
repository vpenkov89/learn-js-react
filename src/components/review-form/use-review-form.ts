import { Reducer, useCallback } from "react";
import { useReducer } from "react";
import { IReview } from "../../constants/mock";

const INITIAL_VALUE: IReview = {
  user: "",
  text: "",
  rating: 5,
};

enum ReviewFormActionType {
  SET_USER,
  SET_TEXT,
  SET_RATING,
}

type ReviewFormReducerAction =
  | {
      type: ReviewFormActionType.SET_USER | ReviewFormActionType.SET_TEXT;
      payload: string;
    }
  | {
      type: ReviewFormActionType.SET_RATING;
      payload: number;
    };

const reducer: Reducer<IReview, ReviewFormReducerAction> = (
  state: IReview,
  { type, payload }: ReviewFormReducerAction
): IReview => {
  switch (type) {
    case ReviewFormActionType.SET_USER:
      return {
        ...INITIAL_VALUE,
        user: payload,
      };
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

export type TUseReviewForm = () => {
  form: IReview,
  setName: (event: React.ChangeEvent<HTMLInputElement>) => void,
  setText: (event: React.ChangeEvent<HTMLInputElement>) => void,
  setRating: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const useReviewForm: TUseReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);
  const name = form.user;

  // Более простой вариант reducer-a имеет вид (передаем тип action-a извне):
  // const setValue = (type, value) => dispatch({type, payload: value})
  // return {
  //   form,
  //   setValue
  // };

  
  // useCallback нужен, чтобы возвращалась ссылка на старую функцию при каждом рендере, если зависимости в [] не изменились
  // при этом физически при каждом рендере создается новая функция, но вернется ли новая или старая функция зависит от того, изменились ли зависимости
  const setName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ReviewFormActionType.SET_USER,
      payload: event.target.value,
    });
  }, []);

  const setText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (name) {
        dispatch({
          type: ReviewFormActionType.SET_TEXT,
          payload: event.target.value,
        });
      }
    },
    [name]
  );

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
    setName,
    setText,
    setRating,
  };
};
