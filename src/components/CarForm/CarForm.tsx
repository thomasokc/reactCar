import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseCostOfProduction, chooseDescription, chooseMake, chooseName, choosePrice, chooseModel } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    name: string;
    price: number;
    description: string;
    cost_of_production: number;
    make: string;
    model: string;
}

export const CarForm = (props: CarFormProps) => {

    const dispatch = useDispatch();
    let { carData, getData } = useGetData();

    const store = useStore()
    const name = useSelector<CarState>(state => state.name)
    const price = useSelector<CarState>(state => state.price)
    const description = useSelector<CarState>(state => state.description)
    const cost_of_production = useSelector<CarState>(state => state.cost_of_production)
    const make = useSelector<CarState>(state => state.make)
    const model = useSelector<CarState>(state => state.model)

    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(choosePrice(data.price))
            dispatch(chooseDescription(data.description))
            dispatch(chooseCostOfProduction(data.cost_of_production))
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))

            server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Car Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="cost_of_production">Cost Of Production</label>
                    <Input {...register('cost_of_production')} name="cost_of_production" placeholder="Cost Of Production"/>
                </div>
                <div>
                    <label htmlFor="series">Make</label>
                    <Input {...register('make')} name="make" placeholder="Make"/>
                </div>
                <div>
                    <label htmlFor="series">Model</label>
                    <Input {...register('model')} name="model" placeholder="Model"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}