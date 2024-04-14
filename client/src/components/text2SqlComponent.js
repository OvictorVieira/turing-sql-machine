import React, { useState } from 'react';
import transformText2Sql from '../services/text2SqlService';
import { FaSpinner } from 'react-icons/fa';
import './styles/styles.scss';

const Text2SqlComponent = () => {
    const [showSchemaInput, setShowSchemaInput] = useState(false);
    const [schema, setSchema] = useState('');
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleToggleSchemaInput = () => {
        setShowSchemaInput(!showSchemaInput);
        setSchema('');
    };

    const handleTransformText2Sql = async () => {
        try {
            setIsLoading(true);
            const result = await transformText2Sql(question, schema);
            setResponse(result["query"]);
            setIsLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <div>
                <div className="switch-button-box">
                    <label className="switch">
                        <input type="checkbox" onClick={ handleToggleSchemaInput } />
                        <span className="slider round"></span>
                    </label>
                    <div className={ showSchemaInput ? "enabled-schema-input" : "disabled-schema-input" }>
                        Adicionar Schema do Banco de Dados
                    </div>
                </div>
                { showSchemaInput && (
                    <div className="database-schema-box">
                        <span>Adicione seu Database Schema aqui:</span>
                        <textarea
                            className="textarea"
                            placeholder={`Employee (id, name, department_id);\nDepartment (id, name, address);\nSalary_Payments (id, employee_id, amount: int, date: navchar);
                            `}
                            value={ schema }
                            onChange={(e) => setSchema(e.target.value)}
                        />
                    </div>
                )}
            </div>
            <div>
                <span>Escreva aqui o que você precisa:</span>
                <textarea
                    className="textarea"
                    placeholder="Quais são os produtos mais vendidos em termos de quantidade?"
                    value={ question }
                    onChange={(e) => setQuestion(e.target.value)}
                />
            </div>
            <div className="flex justify-content-flex-end">
                <button className={ isLoading ? "disabled button" : "button" } onClick={ handleTransformText2Sql }>
                    <FaSpinner className={ isLoading ? "animate-spin mr-2 spinner" : "animate-spin mr-2" } />

                    Gerar consulta SQL
                </button>
            </div>
            <div>
                <span>Sua consulta gerada através de IA:</span>
                <textarea className="response" value={ response } readOnly />
            </div>
        </div>
    );
};

export default Text2SqlComponent;
