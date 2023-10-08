const SharedTitle = ({ heading, subHeading }) => {

    return (
        <div className="md:w-4/12 mx-auto text-center mt-10 mb-10">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h2 className="text-pink-700 text-5xl uppercase border-y-4 p-4">{heading}</h2>


        </div>
    );
};

export default SharedTitle;