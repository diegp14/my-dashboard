"use client"

import React, { useEffect } from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppDispatch, useAppSelector } from '@/store';
import { initCounterState } from '@/store/counter/CounterSlice';
import { IoCafeOutline } from 'react-icons/io5';

export const WidgetGrid = () => {

    const count = useAppSelector(state => state.counter.value);
        const dispatch = useAppDispatch();
    
        useEffect(() => {
          dispatch(initCounterState(count));
        }, [dispatch, count])
  return (
     <div className="flex flex-wrap items-center justify-center">
                <SimpleWidget
                    title="Contador"
                    subTitle="Número de clicks"
                    label={`Clicks: ${count}`}
                    icon={<IoCafeOutline size={50} className="text-blue-500" />}
                    href="/dashboard/counter"
                />
                {/* <SimpleWidget/> */}
            </div>
  )
}
