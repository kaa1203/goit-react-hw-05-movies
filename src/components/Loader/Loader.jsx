import { BallTriangle } from "react-loader-spinner"

export const Loader = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
}