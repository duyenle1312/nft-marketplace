const Button = ({ classStyle, btnName, handleClick }) => (
  <button type="button" onClick={handleClick} className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:py-4 minlg:px-8 font-poppins font-semibold text-white ${classStyle}`}>{btnName}</button>
);

export default Button;
