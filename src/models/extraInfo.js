'use strict';
module.exports = (sequelize, DataTypes) => {
    const ExtraInfo = sequelize.define('ExtraInfo', {
        patientId: {
            type: DataTypes.INTEGER,
        },
        historyBreath: {
            type: DataTypes.TEXT,
        },
        placeId: {
            type: DataTypes.INTEGER,
            allowNull: true, 
        },
        oldForms: {
            type: DataTypes.TEXT,
        },
        sendForms: {
            type: DataTypes.TEXT,
        },
        moreInfo: {
            type: DataTypes.TEXT,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
        deletedAt: {
            type: DataTypes.DATE,
        },
    }, {
        // Tùy chọn thêm nếu cần
        paranoid: true, 
    });
    
    ExtraInfo.associate = function(models) {
        models.ExtraInfo.belongsTo(models.Patient, { foreignKey: 'patientId' });
        models.ExtraInfo.belongsTo(models.Place, { foreignKey: 'placeId' });
    };
    
    return ExtraInfo;
};
