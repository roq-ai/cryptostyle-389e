import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createPrepaidCard } from 'apiSdk/prepaid-cards';
import { prepaidCardValidationSchema } from 'validationSchema/prepaid-cards';
import { PrepaidCardInterface } from 'interfaces/prepaid-card';

function PrepaidCardCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: PrepaidCardInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createPrepaidCard(values);
      resetForm();
      router.push('/prepaid-cards');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<PrepaidCardInterface>({
    initialValues: {
      balance: 0,
      currency: '',
      expiration_date: new Date(new Date().toDateString()),
    },
    validationSchema: prepaidCardValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Prepaid Cards',
              link: '/prepaid-cards',
            },
            {
              label: 'Create Prepaid Card',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Prepaid Card
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Balance"
            formControlProps={{
              id: 'balance',
              isInvalid: !!formik.errors?.balance,
            }}
            name="balance"
            error={formik.errors?.balance}
            value={formik.values?.balance}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('balance', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.currency}
            label={'Currency'}
            props={{
              name: 'currency',
              placeholder: 'Currency',
              value: formik.values?.currency,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="expiration_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Expiration Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.expiration_date ? new Date(formik.values?.expiration_date) : null}
              onChange={(value: Date) => formik.setFieldValue('expiration_date', value)}
            />
          </FormControl>

          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/prepaid-cards')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'prepaid_card',
    operation: AccessOperationEnum.CREATE,
  }),
)(PrepaidCardCreatePage);
