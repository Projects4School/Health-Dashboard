import { Suspense } from 'react';
import moment from 'moment';
import { ArrowDownCircleIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { randomUUID } from 'crypto';

const patients = [
    {
        name: 'Ludovic Besson',
        since: 'Jan, 2020',
        time: '3:00',
    },
    {
        name: 'Ludovic Besson',
        since: 'Jan, 2020',
        time: '3:00',
    },
    {
        name: 'Ludovic Besson',
        since: 'Jan, 2020',
        time: '3:00',
    },
    {
        name: 'Ludovic Besson',
        since: 'Jan, 2020',
        time: '3:00',
    },
    {
        name: 'Ludovic Besson',
        since: 'Jan, 2020',
        time: '3:00',
    },
    {
        name: 'Ludovic Besson',
        since: 'Jan, 2020',
        time: '3:00',
    },
    {
        name: 'Ludovic Besson',
        since: 'Jan, 2020',
        time: '3:00',
    },
    {
        name: 'Ludovic Besson',
        since: 'Jan, 2020',
        time: '3:00',
    },
    {
        name: 'Ludovic Besson',
        since: 'Jan, 2020',
        time: '3:00',
    },
]

export default async function Page() {
    return (
        <div className='grid grid-cols-12 gap-5 auto-cols-fr'>
            <div className='col-span-2 flex flex-col'>
                <h1 className={`flex flex-col`}>
                    <span className={'text-3xl font-medium'}>{moment().format('dddd')}</span>
                    <span className={'text-8xl my-2 font-light'}>{moment().format('D')}</span>
                </h1>
                <div className={'flex'}>
                    <div className={'bg-secondary p-1 rounded'}></div>
                    <p className={'p-4 align-middle font-semibold'}>Hi Chef, you have <span className="opacity-50">13 meetings</span> today</p>
                </div>
            </div>
            <div className='col-span-4 flex flex-col gap-4'>
                <div className="flex justify-center items-center bg-secondary rounded-full text-2xl p-2 gap-2">
                    <p className='font-normal'>Upcoming Patient</p>
                    <ArrowDownCircleIcon className='w-12' />
                </div>
                <div className="bg-white rounded-4xl flex items-center justify-center py-8 flex-grow">
                    <Image
                        src="/gro.jpeg"
                        width={64}
                        height={64}
                        className="rounded-full"
                        alt="Gro"
                    />
                    <div className="px-5">
                        <p className="font-semibold mb-4">
                            <span className="block -mb-2">Ludovic Besson</span>
                            <span className="block opacity-50">Patient since Jan, 2020</span>
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="bg-swhite px-3 py-0.5 rounded-full font-semibold">3:00</span>
                            <span className="bg-secondary px-2 rounded-full"><ArrowLongRightIcon className='w-4' /></span>
                            <span className="bg-swhite px-3 py-0.5 rounded-full font-semibold">3:30</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-3 rounded-4xl flex border border-primary border-opacity-20 p-7 flex-col h-64 bg-gradient-to-b to-transparent pb-0">
                <p className="font-semibold border-b border-primary border-opacity-20">Patient Queue</p>
                <div className="flex flex-col masked-overflow pt-2">
                    {patients.map((patient) => {
                        return (
                            <div key={randomUUID()} className="flex items-start py-2 gap-5">
                                <p className="font-semibold opacity-40">9AM</p>
                                <div className="border-b border-primary border-opacity-20 pb-2">
                                    <div>
                                        <p className="font-semibold">{patient.name}</p>
                                    </div>
                                    <Image
                                        src="/gro.jpeg"
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                        alt="Gro"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}