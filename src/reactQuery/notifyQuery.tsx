import {Panics} from '@src/types/userTypes';
import {useQuery} from '@tanstack/react-query';

export const SetPanicsQuery = (panics: Panics[]) => {
  const query = useQuery({
    queryKey: ['panics'],
    queryFn: async () => {
      return panics;
    }
  });
  return query;
};

export const GetPanicsQuery = () =>
  useQuery(['panics'], {refetchOnWindowFocus: false});
