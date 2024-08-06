const TopNav = () => {
    return (
        <div className="flex justify-start bg-primary-bg px-2">
            <img src="arrow-left.svg" />
            <div className="flex flex-col justify-center items-center w-full">
                <h3 className="font-semibold text-primary-text text-lg">Checkout</h3>
                <p className="text-gray text-sm">POPEYES | JP NAGAR</p>
            </div>
        </div>
    );
};
export default TopNav;
