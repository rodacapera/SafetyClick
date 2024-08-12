import {getGroupById} from '@src/hooks/firebase/groups/groups';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export const SetGroupQuery = (group_number?: string) => {
  const query = useQuery({
    queryKey: ['groups'],
    queryFn: async () => group_number && (await getGroupById(group_number)),
    enabled: !!group_number
  });
  return query;
};

export const UpdateGroupQuery = () => {
  const queryClient = useQueryClient();
  const responseMutation = useMutation({
    mutationFn: (group_number: string) => getGroupById(group_number),
    retry: true,
    onSuccess: async data => {
      queryClient.setQueryData(['groups'], data.data());
      return data;
    },
    onError: error => {
      console.debug('data onerror', error);
    }
  });
  return responseMutation;
};
