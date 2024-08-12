export const confirmCode = async (
  confirm: {confirm: (arg0: any) => any},
  code: number
) => {
  try {
    const resultConfirm = await confirm.confirm(code);
    console.debug('resultConfirm', resultConfirm);
  } catch (error) {
    console.error('Invalid code.');
  }
};
