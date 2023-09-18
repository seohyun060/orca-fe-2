import React, { useCallback, useEffect, useState, useMemo } from 'react';
import '../styles/home.styles.scss';
import { ResearcherList } from '@typedef/types';
import { useTranslation } from 'react-i18next';
import images from 'src/assets/images';

type Props = {
	requestedItems: ResearcherList;
	active: boolean;
	boxType: number;
	isSelected: boolean;
	onBackClick: (e: React.MouseEvent<HTMLImageElement>) => void;
	onGoClick: (e: React.MouseEvent<HTMLImageElement>) => void;
	boxClickHandler: (e: React.MouseEvent<HTMLElement>) => void;
	black: string;
	topPosition: string;
	leftPosition: string;
	dotList: string[];
};

const ResearcherBox = ({
	requestedItems,
	active,
	boxType,
	isSelected,
	onBackClick,
	onGoClick,
	boxClickHandler,
	black,
	topPosition,
	leftPosition,
	dotList,
}: Props) => {
	const { t } = useTranslation();
	return (
		<div className={`country${boxType}`}>
			<div
				onClick={(e) => boxClickHandler(e)}
				className={`${
					!isSelected || active ? 'country-box' : 'country-box-Off'
				}`}
				style={{
					backgroundColor: active ? '#9e9e9e' : '',
					mixBlendMode: 'multiply',
				}}
			></div>
			{/* {active ? ( */}
			<div
				className={`researchers${active ? '-active' : ''}`}
				style={{
					top: topPosition,
					left: leftPosition,
				}}
			>
				<div className='researchers-head'>{t('researcher_list')}</div>
				<img
					className='researchers-back'
					src={black === '' ? images.back_b : images.back_w}
					onClick={onBackClick}
				/>
				<div className='researchers-body'>
					{requestedItems.map((requestItem) => (
						<div className='researcher-card'>
							<img src={requestItem.profile} />
							<span>{requestItem.name}</span>
						</div>
					))}
				</div>
				<img
					className='researchers-go'
					src={black === '' ? images.go_b : images.go_w}
					onClick={onGoClick}
				/>
				<div className='researchers-dot'>
					{dotList.map((dot, index) => (
						<img src={dot} />
					))}
				</div>
			</div>
			{/* ) : (
				''
			)} */}
		</div>
	);
};

export default ResearcherBox;
