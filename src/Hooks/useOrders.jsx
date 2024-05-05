import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useOrders = () => {

  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: orderProduct = [], isLoading, refetch } = useQuery({
    queryKey: ["orderProduct", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/my-orders/${user?.email}`)
      return res.data
    }
  })

  return  { orderProduct, orderLoading: isLoading,refetch };
};

export default useOrders;