import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getTableById, editTable} from '../../../redux/tablesRedux.js';
import {getAllStatuses} from '../../../redux/statusesRedux.js';
import {useNavigate} from 'react-router-dom';
import {Form} from 'react-bootstrap';
import InputBill from '../../features/InputBill/InputBill.js';
import InputPeople from '../../features/InputPeople/InputPeople.js';
import SelectStatus from '../../features/SelectStatus/SelectStatus.js';
import FormButton from '../../common/FormButton/FormButton.js';

const Table = ({id}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const table = useSelector(state => getTableById(state, id));
  const statuses = useSelector(state => getAllStatuses(state));

  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setTablePeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setTableBill] = useState(table.bill);

  // useEffect(() => {
  //   if (table) {
  //     setStatus(table.status);
  //     setTablePeopleAmount(table.peopleAmount);
  //     setMaxPeopleAmount(table.maxPeopleAmount);
  //     setTableBill(table.bill);
  //   }
  // }, [table]);

  const clearValues = newStatus => {
    if (newStatus === 'Busy') {
      setTableBill(parseInt(0));
    } else if (newStatus === 'Cleaning' || newStatus === 'Free') {
      setTablePeopleAmount(parseInt(0));
    }
  };

  const handleUpdateTable = event => {
    event.preventDefault();
    dispatch(
      editTable({
        id,
        status,
        peopleAmount: parseInt(peopleAmount),
        maxPeopleAmount: parseInt(maxPeopleAmount),
        bill: parseInt(bill),
      })
    );
    navigate('/');
  };

  return (
    <div>
      <h1>Table {id}</h1>
      <Form onSubmit={handleUpdateTable}>
        <SelectStatus statuses={statuses} status={status} setStatus={setStatus} clearValues={clearValues} />
        <InputPeople peopleAmount={peopleAmount} setTablePeopleAmount={setTablePeopleAmount} maxPeopleAmount={maxPeopleAmount} setMaxPeopleAmount={setMaxPeopleAmount} />
        <InputBill setTableBill={setTableBill} bill={bill} status={status} />
        <FormButton text="Submit" />
      </Form>
    </div>
  );
};

export default Table;
