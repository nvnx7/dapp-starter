import { useToast as useChakraToast, UseToastOptions } from '@chakra-ui/react';

/**
 * Default config for toast
 */
const defaultOpts: UseToastOptions = {
  variant: 'subtle',
  position: 'bottom-right',
  isClosable: true,
  duration: 4000,
};

const useToast = () => {
  const toast = useChakraToast();

  const showToast = (opts: UseToastOptions = {}) => toast({ ...defaultOpts, ...opts });
  const showSuccessToast = (opts: UseToastOptions = {}) =>
    toast({ ...defaultOpts, ...opts, status: 'success' });
  const showErrorToast = (opts: UseToastOptions = {}) =>
    toast({ ...defaultOpts, ...opts, status: 'error' });
  const showInfoToast = (opts: UseToastOptions = {}) =>
    toast({ ...defaultOpts, ...opts, status: 'info' });
  const showTxStatusToast = (isSuccess: boolean, isError: boolean, opts: UseToastOptions = {}) => {
    if (isSuccess) showSuccessToast({ ...opts, title: 'Transaction sent!' });
    else if (isError) showErrorToast({ ...opts, title: 'Failed to send transaction!' });
  };

  return {
    showToast,
    showErrorToast,
    showSuccessToast,
    showInfoToast,
    showTxStatusToast,
  };
};

export default useToast;
