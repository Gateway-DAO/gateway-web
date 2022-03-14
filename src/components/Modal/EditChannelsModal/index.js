import * as Styled from './style';
import { useEffect, useState } from 'react';
import Modal from '../index';
import * as ModalStyled from '../style';
import { FormStyled } from '../../Form';
import { IoAddCircleOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

const EditChannelModal = (props) => {
	const daoChannels = props.channels;
	const [channelsArray, setChannelsArray] = useState(daoChannels);
	const [channels, setChannels] = useState({});
	const toObject = (arr) => {
		var newArray = {};
		for (var i = 0; i < arr.length; ++i) newArray[i] = arr[i];
		return newArray;
	};

	useEffect(() => {
		const newArray = toObject(channelsArray);
		setChannels(newArray);
	}, [channelsArray]);

	const submitHandler = () => {
		props.newChannelsSubmit(Object.values(channels));
	};
	const AddChannelHandler = () => {
		setChannelsArray((prev) => [...prev, '']);
	};
	const ChannelRemoveHandler = (key) => {
		setChannelsArray((prev) => prev.filter((e, i) => i !== Number(key)));
	};

	return (
		<Modal show={props.show} toggle={props.toggle}>
			<Styled.Container>
				<ModalStyled.Header>Edit Channels</ModalStyled.Header>
				<Styled.Underline />
				{Object.keys(channels).map((key) => {
					return (
						<FormStyled.Fieldset>
							<Styled.ChannelNumber>
								Channel {Number(key) + 1}
								<MdDelete
									onClick={() => ChannelRemoveHandler(key)}
									color='#db3b45'
									size={20}
									style={{
										paddingLeft: '10px',
										cursor: 'pointer',
									}}
								/>
							</Styled.ChannelNumber>
							<FormStyled.Label>Display Name </FormStyled.Label>
							<FormStyled.Input
								type='text'
								id='name'
								name='name'
								value={channels[key]}
								placeholder='Display Name'
								onChange={(event) =>
									setChannels((prev) => {
										return {
											...prev,
											[key]: event.target.value,
										};
									})
								}
							/>
						</FormStyled.Fieldset>
					);
				})}
				<Styled.AddChannelButton>
					<IoAddCircleOutline
						onClick={AddChannelHandler}
						color='white'
						size={40}
						style={{
							paddingLeft: '10px',
							cursor: 'pointer',
							color: 'white!important',
						}}
					/>
				</Styled.AddChannelButton>

				<FormStyled.Button
					onClick={submitHandler}
					id='submit_msg'
					type='button'
				>
					Submit
				</FormStyled.Button>
			</Styled.Container>
		</Modal>
	);
};

export default EditChannelModal;
