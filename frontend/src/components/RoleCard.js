const RoleCard = ({ role }) => {
    const totalComp = role.base + role.bonus + role.stock;

    return (
        <div className="role-card">
            <h2>
                {role.title} ({role.level})
            </h2>
            <p>
                {role.company} - {role.location}
            </p>
            <p>Base: ${role.base}</p>
            <p>Bonus: ${role.bonus}</p>
            <p>Stock: ${role.stock}</p>
            <p>
                <strong>Total Compensation: ${totalComp}</strong>
            </p>
        </div>
    );
};

export default RoleCard;
