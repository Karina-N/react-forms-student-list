
function Student(props) {
    return (
        <section className="student">
            <h6>{props.name}</h6>
            <h6>{props.age}</h6>
            <img src={props.profileImg} />
        </section>
    );
}

export default Student;